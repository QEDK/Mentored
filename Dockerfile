# Use Python 3.7 base image
FROM python:3.7-buster

ENV PYTHONUNBUFFERED=1

# Create a working directory
WORKDIR /project

# Add requirements.txt
COPY ./backend/requirements.txt /project

# Install dependencies
RUN pip install -r requirements.txt

# Copy rest of the files
COPY ./backend /project

# Make the container listen on port 8000
EXPOSE 8000

# Run Django server on all interfaces, port 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]