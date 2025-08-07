# upload_data.py
import os
import django
from django.core.exceptions import ValidationError

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WORDSWORLD.settings')
django.setup()
from GAMEapp.models import Quest_Ans
Quest_Ans.objects.all().delete()

data_to_insert =  [
  { "question": "What is the capital of Australia?", "answer": "Canberra" },
  { "question": "Who discovered gravity?", "answer": "Isaac Newton" },
  { "question": "Which planet is known as the Red Planet?", "answer": "Mars" },
  { "question": "Which element has the chemical symbol 'O'?", "answer": "Oxygen" },
  { "question": "What is the longest river in the world?", "answer": "Nile" },
  { "question": "Who wrote 'Romeo and Juliet'?", "answer": "William Shakespeare" },
  { "question": "Which continent is known as the Dark Continent?", "answer": "Africa" },
  { "question": "Who was the first President of the United States?", "answer": "George Washington" },
  { "question": "Which gas is most abundant in Earth's atmosphere?", "answer": "Nitrogen" },
  { "question": "What is the square root of 144?", "answer": "12" },
  { "question": "Which metal is liquid at room temperature?", "answer": "Mercury" },
  { "question": "In which year did World War II end?", "answer": "1945" },
  { "question": "Who painted the Mona Lisa?", "answer": "Leonardo da Vinci" },
  { "question": "Which is the smallest planet in our solar system?", "answer": "Mercury" },
  { "question": "What is the currency of Japan?", "answer": "Yen" },
  { "question": "Which language has the most native speakers?", "answer": "Mandarin Chinese" },
  { "question": "Which country gifted the Statue of Liberty to the USA?", "answer": "France" },
  { "question": "Which organ purifies blood in the human body?", "answer": "Kidney" },
  { "question": "What is the hardest natural substance on Earth?", "answer": "Diamond" },
  { "question": "Which planet has the most moons?", "answer": "Saturn" },
  { "question": "What is the national animal of India?", "answer": "Bengal Tiger" },
  { "question": "What does 'HTTP' stand for?", "answer": "HyperText Transfer Protocol" },
  { "question": "Which scientist proposed the theory of relativity?", "answer": "Albert Einstein" },
  { "question": "What is the capital city of Canada?", "answer": "Ottawa" },
  { "question": "How many continents are there?", "answer": "Seven" },
  { "question": "Which ocean is the largest?", "answer": "Pacific Ocean" },
  { "question": "Who invented the telephone?", "answer": "Alexander Graham Bell" },
  { "question": "Which is the highest mountain in the world?", "answer": "Mount Everest" },
  { "question": "What is the study of plants called?", "answer": "Botany" },
  { "question": "Which vitamin is produced by sunlight?", "answer": "Vitamin D" },
  { "question": "Which animal is known as the Ship of the Desert?", "answer": "Camel" },
  { "question": "What is the freezing point of water in Celsius?", "answer": "0" },
  { "question": "Who was the first man to walk on the moon?", "answer": "Neil Armstrong" },
  { "question": "Which blood group is known as the universal donor?", "answer": "O negative" },
  { "question": "Which Indian city is known as the Pink City?", "answer": "Jaipur" },
  { "question": "Who is known as the 'Father of the Nation' in India?", "answer": "Mahatma Gandhi" },
  { "question": "Which country is known as the Land of the Rising Sun?", "answer": "Japan" },
  { "question": "What is the main source of energy for Earth?", "answer": "Sun" },
  { "question": "What is the name of the largest desert in the world?", "answer": "Sahara Desert" },
  { "question": "What does DNA stand for?", "answer": "Deoxyribonucleic Acid" },
  { "question": "Which planet is closest to the sun?", "answer": "Mercury" },
  { "question": "What is the boiling point of water in Celsius?", "answer": "100" },
  { "question": "Which is the national flower of India?", "answer": "Lotus" },
  { "question": "Who was the first woman Prime Minister of India?", "answer": "Indira Gandhi" },
  { "question": "What is the name of the process by which plants make food?", "answer": "Photosynthesis" },
  { "question": "Which festival is known as the Festival of Lights?", "answer": "Diwali" },
  { "question": "Which sport is known as the 'king of sports'?", "answer": "Soccer" },
  { "question": "What is the most widely spoken language in the world?", "answer": "English" },
  { "question": "Which bird is the national bird of India?", "answer": "Peacock" },
  { "question": "What is the name of India’s highest civilian award?", "answer": "Bharat Ratna" }
]
for entry in data_to_insert:
    try:
        Quest_Ans.objects.create(**entry)
    except ValidationError as e:
        print(f"Validation error: {e}")


# Scrapy

# Autobahn

# Twisted Web