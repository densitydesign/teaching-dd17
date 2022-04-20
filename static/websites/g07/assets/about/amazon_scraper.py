# imported packages
import requests # to load the html page
from bs4 import BeautifulSoup # to parse the html
import csv # to work with csv
from numpy import random # to create random numbers
from time import sleep # to wait during script execution

# -------------------------------- MODIFY THIS -------------------------------------------

target_csv = 'covid_objects.csv'
url = 'http://amazon.it/'
country = '.it'
queries = ['covid-19', 'coronavirus']

# -------------------------------- MODIFY THIS -------------------------------------------


# search for a word in array
# used to check amazon's category
def word_presence(array, html):
    for word in array:
        if word in html.text:
            return True


# class structure for covid products
class CovidObject:

    def __init__(self, name, link, category, country, query, rating, n_reviews, img_url):
        self.name = name
        self.link = link
        self.category = category
        self.country = country
        self.query = query
        self.rating = rating
        self.n_reviews = n_reviews
        self.img_url = img_url

    def print_object(self):
        print('NAME: ', self.name)
        print('LINK: ', self.link)
        print('CATEGORY: ', self.category)
        print('COUNTRY: ', self.country)
        print('QUERY: ', self.query)
        print('RATING: ', self.rating)
        print('N_REVIEWS: ', self.n_reviews)
        print('IMG_URL: ', self.img_url)


# categories keywords for Amazon's tags
prime_video = ['Prime Video', 'برايم فيديو']
book = ['Hardcover', 'Paperback', 'Paperback (Perfect)', 'Print on Demand (Paperback)', 'Loose Leaf', 'Taschenbuch', 'Gebundenes Buch', 'Broschiert', 'Mass Market Paperback', 'Broché', 'Relié', 'Poche', 'Copertina flessibile', 'Copertina rigida', 'Tapa blanda', 'Tapa dura', 'Libro', 'Tabla blanda con encolado', 'Oprawa twarda', 'Oprawa miękka', 'Oprawa biblioteczna', 'Miękka oprawa', 'Pocketbok', 'Inbunden', 'Biblioteksbindning', '単行本', '雑誌', 'ムック', '新書',' ペーパーバック', 'Kağıt Kapak', 'Ciltsiz', 'Ciltli Kapak', 'Küçük Boy Ciltsiz', 'Pasta blanda', 'Pasta dura', 'Capa Comum', 'Capa Dura', 'Capa flexível', 'غلاف ورقي', 'غلاف صلب']
kindle = ['Kindle', 'Kindle Ausgabe', 'Kindle Edition', 'Format Kindle', 'Formato Kindle', 'Versión Kindle', 'Kindle-editie', 'Kindle版', 'Edición Kindle', 'eBook Kindle', 'Kindle电子书']
video_disk = ['Blu-ray', 'DVD', 'Dvd', 'DVD-ROM']
music_disk = ['Audio CD', 'Vinyl', 'CD de audio', 'Disco de Vinil', 'Ljud-CD']
audiobook = ['Audible Audiobooks']
mp3 = ['MP3']
app = ['App', 'Aplicativo']

# array to store all the products
covid_objects_list = []

# headers passed to the server to fake a real browser
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0"}

# ACTUAL SCRAPING
for query in queries:

    # the scraper can be blocked by the server
    # the script retry after every blocked request for 50 times
    retry = 'y'
    tries = 0
    while retry == 'y':

        # create link with the query
        url_query = url + "s?k=" + query

        # request the html page to the server
        results = requests.get(url_query, headers=headers)

        # parse the html
        soup = BeautifulSoup(results.text, "html.parser")

        # extract the products container form the html
        object_results = soup.find_all('div', {"data-component-type": "s-search-result"})
        retry = 'n'

        # if no element in the array -> scraper has been blocked
        if len(object_results) == 0:

            print(f'scraper blocked at "{query}"')
            sleepTime = random.uniform(2, 4)
            sleep(sleepTime)

            tries = tries + 1
            if tries > 50:
                retry = input('------------> type "y" to retry: ')
                if retry == 'y':
                    tries = 0
            else:
                retry = 'y'
        else:
            print(f'scraper passed at "{query}"')

    # extract each product in the products container
    for container in object_results:

        # check the product category
        if word_presence(prime_video, container):
            category = 'Prime video'
        elif word_presence(book, container):
            category = 'Book'
        elif word_presence(kindle, container):
            category = 'Kindle'
        elif word_presence(video_disk, container):
            category = 'Video disk'
        elif word_presence(music_disk, container):
            category = 'Music disk'
        elif word_presence(audiobook, container):
            category = 'Audiobook'
        elif word_presence(mp3, container):
            category = 'MP3 file'
        elif word_presence(app, container):
            category = 'App'
        else:
            category = "other"

        name = container.find('h2').a.span.text
        link = url + container.find('h2').a['href']

        # get image urls with different resolutions
        img_url_temp = container.find('img', {"data-image-latency": "s-product-image"})['srcset']
        # extract the lowest resolution image url
        img_url = img_url_temp.split(", ")[0][:-3]

        # check if there are reviews
        childTag = container.find('div', class_='a-row a-size-small')
        if childTag:
            rating_container = container.find('div', class_='a-row a-size-small')
            rating = rating_container.find_all('span')[2].text[:3]
            n_reviews = rating_container.find_all('span')[4].text
        else:
            rating = 'absent'
            n_reviews = 'absent'

        # store the object in the array
        covid_objects_list.append(CovidObject(name, link, category, country, query, rating, n_reviews, img_url))

    # print all the objects and the total number
    for obj in covid_objects_list:
        print('--------------------------------------')
        obj.print_object()

    print('tot objects: ', len(covid_objects_list))

    # save the data gathered
    save = input(f'-----------> Type "y" to store data of query "{query}": ')

    if save == 'y':

        # open the csv
        f = open(target_csv, 'a', encoding='UTF8', newline='')
        writer = csv.writer(f)

        # save each object in the csv file
        for obj in covid_objects_list:
            writer.writerow([obj.name, obj.link, obj.category, obj.country, obj.query, obj.rating, obj.n_reviews, obj.img_url])
