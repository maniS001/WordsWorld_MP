# upload_data.py
import os
import django
from django.core.exceptions import ValidationError

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WORDSWORLD.settings')
django.setup()
from GAMEapp.models import Quest_Ans
# Quest_Ans.objects.all().delete()

data_to_insert =  [
  # { "question": "What is the capital of Australia?", "answer": "Canberra" },
  # { "question": "Which planet is known as the Red Planet?", "answer": "Mars" },
  # { "question": "Which element has the chemical symbol 'O'?", "answer": "Oxygen" },
  # { "question": "What is the longest river in the world?", "answer": "Nile" },
  # { "question": "Which continent is known as the Dark Continent?", "answer": "Africa" },
  # { "question": "Who was the first President of the United States?", "answer": "Washington" },
  # { "question": "Which gas is most abundant in Earth's atmosphere?", "answer": "Nitrogen" },
  # { "question": "Which metal is liquid at room temperature?", "answer": "Mercury" },
  # { "question": "In which year did World War II end?", "answer": "1945" },
  # { "question": "Which is the smallest planet in our solar system?", "answer": "Mercury" },
  # { "question": "What is the currency of Japan?", "answer": "Yen" },
  # { "question": "Which country gifted the Statue of Liberty to the USA?", "answer": "France" },
  # { "question": "Which organ purifies blood in the human body?", "answer": "Kidney" },
  # { "question": "What is the hardest natural substance on Earth?", "answer": "Diamond" },
  # { "question": "Which planet has the most moons?", "answer": "Saturn" },
  # { "question": "What is the national animal of India?", "answer": "Tiger" },
  # { "question": "What is the capital city of Canada?", "answer": "Ottawa" },
  # { "question": "How many continents are there?", "answer": "Seven" },
  # { "question": "Which ocean is the largest?", "answer": "Pacific" },
  # { "question": "Which is the highest mountain in the world?", "answer": "Everest" },
  # { "question": "What is the study of plants called?", "answer": "Botany" },
  # { "question": "Which vitamin is produced by sunlight?", "answer": "D" },
  # { "question": "Which animal is known as the Ship of the Desert?", "answer": "Camel" },
  # { "question": "Which blood group is known as the universal donor?", "answer": "Onegative" },
  # { "question": "Which Indian city is known as the Pink City?", "answer": "Jaipur" },
  # { "question": "Which country is known as the Land of the Rising Sun?", "answer": "Japan" },
  # { "question": "What is the main source of energy for Earth?", "answer": "Sun" },
  # { "question": "Which planet is closest to the sun?", "answer": "Mercury" },
  # { "question": "Which is the national flower of India?", "answer": "Lotus" },
  # { "question": "What is the name of the process by which plants make food?", "answer": "Photosynthesis" },
  # { "question": "Which festival is known as the Festival of Lights?", "answer": "Diwali" },
  # { "question": "Which sport is known as the King of Sports?", "answer": "Soccer" },
  # { "question": "What is the most widely spoken language in the world?", "answer": "English" },
  # { "question": "Which bird is the national bird of India?", "answer": "Peacock" },
  # { "question": "Which metal is used to make thermometers?", "answer": "Mercury" },
  # { "question": "Which country is famous for pyramids?", "answer": "Egypt" },
  # { "question": "Which organ pumps blood in the human body?", "answer": "Heart" },
  # { "question": "Which Indian city is called the City of Joy?", "answer": "Kolkata" },
  # { "question": "Which continent is the largest?", "answer": "Asia" },
  # { "question": "Which star is at the center of our solar system?", "answer": "Sun" },
  # { "question": "What is the capital of Italy?", "answer": "Rome" },
  # { "question": "What is the fastest land animal?", "answer": "Cheetah" },
  # { "question": "Which gas do humans exhale?", "answer": "CarbonDioxide" },
  # { "question": "Which planet is known as the Blue Planet?", "answer": "Earth" },
  # { "question": "Which insect produces honey?", "answer": "Bee" },
  # { "question": "Which natural satellite orbits the Earth?", "answer": "Moon" },
  # { "question": "Which is the largest mammal?", "answer": "BlueWhale" },
  # { "question": "Which festival marks the harvest in Punjab?", "answer": "Baisakhi" },
  # { "question": "Which is the national game of India?", "answer": "Hockey" }


  { "question": "What is the capital of Germany?", "answer": "Berlin" },
  { "question": "Which ocean lies between Africa and Australia?", "answer": "Indian" },
  { "question": "What is the national fruit of India?", "answer": "Mango" },
  { "question": "Which element has the chemical symbol 'H'?", "answer": "Hydrogen" },
  { "question": "Which planet is known for its rings?", "answer": "Saturn" },
  { "question": "Which country has the Great Wall?", "answer": "China" },
  { "question": "What is the capital of Russia?", "answer": "Moscow" },
  { "question": "Which bird is a symbol of peace?", "answer": "Dove" },
  { "question": "Which animal is the largest land animal?", "answer": "Elephant" },
  { "question": "What is the capital of France?", "answer": "Paris" },
  { "question": "Which instrument measures temperature?", "answer": "Thermometer" },
  { "question": "What is the capital of Egypt?", "answer": "Cairo" },
  { "question": "Which blood group is universal recipient?", "answer": "ABpositive" },
  { "question": "Which is the fastest bird?", "answer": "Falcon" },
  { "question": "What is the capital of South Korea?", "answer": "Seoul" },
  { "question": "Which festival is known as the Festival of Colors?", "answer": "Holi" },
  { "question": "Which gas is essential for breathing?", "answer": "Oxygen" },
  { "question": "What is the capital of Brazil?", "answer": "Brasilia" },
  { "question": "Which is the smallest ocean?", "answer": "Arctic" },
  { "question": "Which organ is called the brain of the computer?", "answer": "CPU" },
  { "question": "What is the capital of Sri Lanka?", "answer": "Colombo" },
  { "question": "Which is the tallest animal?", "answer": "Giraffe" },
  { "question": "Which planet is farthest from the Sun?", "answer": "Neptune" },
  { "question": "What is the capital of Spain?", "answer": "Madrid" },
  { "question": "Which metal is known as quicksilver?", "answer": "Mercury" },
  { "question": "Which is the largest island in the world?", "answer": "Greenland" },
  { "question": "What is the capital of Bangladesh?", "answer": "Dhaka" },
  { "question": "Which is the largest internal organ in the body?", "answer": "Liver" },
  { "question": "What is the capital of Pakistan?", "answer": "Islamabad" },
  { "question": "Which instrument measures earthquakes?", "answer": "Seismograph" },
  { "question": "Which is the national tree of India?", "answer": "Banyan" },
  { "question": "What is the capital of Nepal?", "answer": "Kathmandu" },
  { "question": "Which gas is used in balloons?", "answer": "Helium" },
  { "question": "Which part of the plant makes food?", "answer": "Leaf" },
  { "question": "What is the capital of Thailand?", "answer": "Bangkok" },
  { "question": "Which vitamin is known as ascorbic acid?", "answer": "C" },
  { "question": "Which organ is affected by Hepatitis?", "answer": "Liver" },
  { "question": "What is the capital of Italy?", "answer": "Rome" },
  { "question": "Which planet is known as the Morning Star?", "answer": "Venus" },
  { "question": "Which festival marks the harvest in Tamil Nadu?", "answer": "Pongal" },
  { "question": "Which Indian city is called the City of Lakes?", "answer": "Udaipur" },
  { "question": "Which is the deepest ocean trench?", "answer": "Mariana" },
  { "question": "What is the capital of Turkey?", "answer": "Ankara" },
  { "question": "Which Indian state is known as the Land of Five Rivers?", "answer": "Punjab" },
  { "question": "Which gas do plants absorb from air?", "answer": "CarbonDioxide" },
  { "question": "What is the capital of Afghanistan?", "answer": "Kabul" },
  { "question": "Which star is nearest to Earth?", "answer": "Sun" },
  { "question": "Which Indian city is called the Silicon Valley?", "answer": "Bangalore" },
  { "question": "Which is the largest continent?", "answer": "Asia" },
  { "question": "Which planet is known as the Blue Planet?", "answer": "Earth" }
 

]
for entry in data_to_insert:
    try:
        Quest_Ans.objects.create(**entry)
    except ValidationError as e:
        print(f"Validation error: {e}")


# Scrapy

# Autobahn

# Twisted Web