# upload_data.py
import os
import django
from django.core.exceptions import ValidationError

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WORDSWORD.settings')
django.setup()
from GAMEapp.models import Quest_Ans

data_to_insert = [
  {
    "question": "which of the following introduced the flavor of unix named solaris ?",
    "answer": "Sun microsystem"
  },
  {
    "question": "what is the core of the linux operating system?",
    "answer": "Kernel"
  },
  {
    "question": "who is the founder of linux kernel?",
    "answer": "Linus Torvalds"
  },
  {
    "question": "what approach does an application use to communicate with the kernel?",
    "answer": "System calls"
  },
  {
    "question": "which has excellent support for older hardware?",
    "answer": "Linux"
  },
  {
    "question": "what is the other name of new shell?",
    "answer": "Child shell"
  },
  {
    "question": "where do the users arrive after entering exit in linux system?",
    "answer": "Login prompt"
  },
  {
    "question": "who can change the password of any user?",
    "answer": "SA"
  },
  {
    "question": "which system provides excellent security features?",
    "answer": "Linux"
  },
  {
    "question": "who was very much attracted by elegance and effectiveness of UNIX?",
    "answer": "Linus"
  },
  {
    "question": "which text file contains linux  commands?",
    "answer": "Shell script"
  },
  {
    "question": "which operating system was developed by the contribution of many people throughout the world?",
    "answer": "Linux"
  },
  {
    "question": "which version of UNIX was handled by the students of the university of Helsinki?",
    "answer": "Minix"
  },
  {
    "question": "which standard of unix was followed by linux?",
    "answer": "ANSI"
  },
  {
    "question": "which is called as full name of directory?",
    "answer": "Path name"
  },
  {
    "question": "which program combines linux commands to solve the given problems?",
    "answer": "Shell"
  },
  {
    "question": "what is the space between end of the line and end of the screen is called as?",
    "answer": "Dead space"
  },
  {
    "question": "which vi editor,makes the keyboard to play a role?",
    "answer": "Dual"
  },
  {
    "question": "In what mode of editing ,the keyboard behaves as a normal typewriter with the exception?",
    "answer": "Input mode"
  },
  {
    "question": "which command takes data from one command to another command?",
    "answer": "Pipe"
  },
  {
    "question": "which is linus default shell?",
    "answer": "BAH shell"
  },
  {
    "question": "what is the process does not allow any unauthorized person to access any of ourdirectories or file?",
    "answer": "Verification"
  },
  {
    "question": "which indicate you to find the mode you are working?",
    "answer": "Beep sound"
  },
  {
    "question": "who are placeholders to store values?",
    "answer": "Variables"
  },
  {
    "question": "what type of editing is possible by Ed editor?",
    "answer": "One line"
  },
  {
    "question": "which command clears the screen?",
    "answer": "Clear"
  },
  {
    "question": "what based of PC's ,linux was specifically designed?",
    "answer": "Intel"
  },
  {
    "question": "where did the file system can be used to unambiguously identified and referenced?",
    "answer": "Tree structure"
  },
  {
    "question": "which feature is used to prevent overwriting an existing file the redirection operation?",
    "answer": "Noclobber"
  },
  {
    "question": "when we want replace a file system we have to present file system?",
    "answer": "Unmount"
  },
  {
    "question": "In Linux ,if all the members of the group share their files,they are called as ",
    "answer": "Group users"
  },
  {
    "question": "who can change his/her password with the password command?",
    "answer": "A user"
  },
  {
    "question": "which shell provides many of the tools found in C language?",
    "answer": "Linux"
  },
  {
    "question": "which was widely distributed over the Internet?",
    "answer": "Linux"
  },
  {
    "question": "which was the operating system was created mainly by efforts of Ken Thomson?",
    "answer": "Unix"
  },
  {
    "question": "what is mainly used for creating,deleteing and editing the files?",
    "answer": "Editors"
  },
  {
    "question": "which directory is assigned to the user when he/she enters into the system for the first time,by the System Administrator(SA)?",
    "answer": "Home"
  },
  {
    "question": "which version can run on any machine available now?",
    "answer": "Suitable linux"
  },
  {
    "question": "who developed an effective PC version of Unix for Minix users?",
    "answer": "Linus Torvalds"
  },
  {
    "question": "which of the following is not considered on of the main categories of computer graphics?",
    "answer": "Bar graphis"
  },
  {
    "question": "How to connect a file system on a storage device and our main directory tree by?",
    "answer": "Mounting"
  },
  {
    "question": "which of the storage class may help in faster execution?",
    "answer": "Register"
  },
  {
    "question": "when accessing a structure ,the identifier to the left of the operator is the name ?",
    "answer": "Structure variable"
  },
  {
    "question": "which of the following is not a valid data type in C language?",
    "answer": "Repeat until statement"
  },
  {
    "question": "who developed C language?",
    "answer": "Dennis Ritchie"
  },
  {
    "question": "which of the following sorting algorithm is the slowest?",
    "answer": "Bubble sort"
  },
  {
    "question": "which of the following is not a linear data structure?",
    "answer": "Binary Tree"
  },
  {
    "question": "which of the following is not an open addressing technique to resolve collision?",
    "answer": "Cubic probing"
  },
  {
    "question": "which of the following data structure is more appropriate for implementing quick sort iteratively?",
    "answer": "Stack"
  },
  {
    "question": "which of the following  data structure is used to represent a relationship between pairs,where relationship is not hierarchical?",
    "answer": "Graph"
  }
]

for entry in data_to_insert:
    try:
        Quest_Ans.objects.create(**entry)
    except ValidationError as e:
        print(f"Validation error: {e}")
