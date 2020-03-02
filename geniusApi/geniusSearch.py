import requests
from bs4 import BeautifulSoup

song_t = raw_input("Enter The Song's Title: ")
artist_n = raw_input("Enter The Artist's Name: ")

def request_song_info(song_title, artist_name):
    base_url = 'https://api.genius.com'
    headers = {'Authorization': 'Bearer ' + 'MYcVUV_Xp89IUX3cWIv1tjlwjbXNAmOI848CPoPhHE1NlZ53wvX5PiOklrBkdMEM'}
    search_url = base_url + '/search'
    data = {'q': song_title + ' ' + artist_name}
    response = requests.get(search_url, data=data, headers=headers)

    # return response
    
    # Search for matches in the request response
    # response = request_song_info(song_title, artist_name)
    json = response.json()
    
    remote_song_info = dict()
    
    def scrap_song_url(url):
            page = requests.get(url)
            html = BeautifulSoup(page.text, 'html.parser')
            lyrics = html.find('div', class_='lyrics').get_text()
                
            print(lyrics)
            return lyrics

    for hit in json['response']['hits']:
        if artist_name.lower() in hit['result']['primary_artist']['name'].lower() and song_title.lower() in hit['result']['title'].lower():
            # remote_song_info = hit
            
            remote_song_info.update(hit)
            
            if bool(remote_song_info) == False:
                print("It's equal to null")
                
            else:
                print(remote_song_info)
                
            print(remote_song_info['result']['title'])
            
            # print(remote_song_info)
            # return hit
            # break
        
        if remote_song_info:
            url = remote_song_info['result']['url']
            scrap_song_url(url)
            # print(remote_song_info)
            # return url
        

request_song_info(song_t, artist_n)

