# Use Python 3.7 base image
FROM python:3.7-buster

ENV PYTHONUNBUFFERED=1

# Install dependencies
RUN pip install -r backend/requirements.txt

# Create a working directory
WORKDIR /project

# Add backend to working directory
COPY ./backend /project

# Make the container listen on port 8000
EXPOSE 8000

# Run Django server on all interfaces, port 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]