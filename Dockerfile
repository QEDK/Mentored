# Use Python 3.7 base image
FROM python:3.7-buster

ENV PYTHONUNBUFFERED=1

# Create a working directory
WORKDIR /project

# Add backend to working directory
ADD ./backend /project

# Install dependencies
RUN pip install -r requirements.txt

# Make the container listen on HTTP
EXPOSE 8000

# Run Django server on all interfaces, port 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]