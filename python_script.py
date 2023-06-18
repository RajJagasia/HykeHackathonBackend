from bardapi import Bard
import os
import json
import sys

# print(sys.argv)

def extract_json(text):
    json_start = text.find('{')
    json_end = text.find('}')
    json_text = text[json_start:json_end+1]
    json_dict = json.loads(json_text)
    return json_dict


start = '''Interpret the below statement and give me the answer in json format containing the following fields. If the answer for any of these fields is not written, then set the value of that field as '' (blank string)
How the json should be
{
gender: (Men or Women) (It should only be either men or woman)
color:  (if it is for example dark color give a list of dark colors like [red, black, brown, etc.])(if it is light color give a list of light colors like [white, yellow, pink,etc.])(if it is any color give a list of all colors like [red, black, brown, white, yellow, pink, etc])(if there is no text return blank string)
size: (it should be between S, M, L, XL etc)
event: (use your skill to check what type of event it is)
typeOfClothing: (it should be a list of clothing types like [shirt, tshirt, jeans, pants, coat, blouse, suit, etc])(if there is no text reccomend any type of clothing suitable for the event and according to the gender)

}

Statement to interpret --->'''

end = '''
Only give the json as the final answer no other useless text'''


# statement = "I need a suit for an event, it should be a dark color, the size should be L and it is for a male."
statement = "I am a female, my size is medium. i need a formal dress for a buisness event. the colour should be dark"

final = start + sys.argv[1] + end
# print(final)

os.environ['_BARD_API_KEY']='XQiAX9QMWOhs6uRcZ2rTT5F9-_PVf-RRQxC7Z-BrxYbHzUPoCme3nycwg7donzp51Lp8IA.'
# texthi = Bard().get_answer(final)['content']

print(json.dumps(extract_json(Bard().get_answer(final)['content'])))