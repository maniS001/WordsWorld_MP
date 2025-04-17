FROM python:3.12.1


# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /code

# Copy the project code into the container
COPY . /code/

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port your Django app runs on
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
