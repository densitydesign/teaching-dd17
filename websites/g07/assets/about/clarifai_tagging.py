from clarifai_grpc.grpc.api import service_pb2, resources_pb2
from clarifai_grpc.grpc.api.status import status_code_pb2
from clarifai_grpc.grpc.api import service_pb2_grpc
from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from csv import writer
from csv import reader


# csv file with elements to tag
source = 'csv/covid_unclassified_dataset.csv'

# csv file where to store the tagged element
target = 'csv/covid_classified_dataset.csv'

# the structure of the csv must be this

# | id  | img_link |
#  ----- ----------
# |  x  |    x     |
#  ----- ----------
# |  x  |    x     |
#  ----- ----------
# |  x  |    x     |
#  ----- ----------

# objects that send the request to Clarifai
stub = service_pb2_grpc.V2Stub(ClarifaiChannel.get_grpc_channel())

# authentication
metadata = (('authorization', f'Key {"PUT_YOUR_APPLICATION_KEY_HERE"}'),)

# open the file where to store the tagging
classified = open(target, 'a', encoding='UTF8', newline='')
csv_writer = writer(classified)
# write the header in the csv file
csv_writer.writerow(['id', 'img_link', 'tag', 'value'])

# open the file to read
with open(source, 'r', encoding="utf8") as read_obj:
    csv_reader = reader(read_obj)

    # skip header
    header = next(csv_reader)

    # for each row get the image link and analyze the image
    for row in csv_reader:

        # get image link
        image_link = row[1]
        request = service_pb2.PostModelOutputsRequest(
            # Use your model id
            model_id='PUT_YOUR_MODEL_ID_HERE',
            inputs=[
                resources_pb2.Input(data=resources_pb2.Data(image=resources_pb2.Image(url=image_link)))
            ])

        # request the analysis
        response = stub.PostModelOutputs(request, metadata=metadata)

        # handle errors
        if response.status.code != status_code_pb2.SUCCESS:
            print("There was an error with your request!")
            print("\tCode: {}".format(response.outputs[0].status.code))
            print("\tDescription: {}".format(response.outputs[0].status.description))
            print("\tDetails: {}".format(response.outputs[0].status.details))
            raise Exception("Request failed, status code: " + str(response.status.code))

        # get the response
        tag = response.outputs[0].data.concepts[0]

        # print them out
        print('-----------------------------------------------')
        print(row[0])
        print('%12s: %.2f' % (tag.name, tag.value))

        # store the row with the tag in the csv file
        csv_writer.writerow([row[0], row[1], tag.name, tag.value])
