FROM openjdk:17-jdk-slim

RUN apt-get update

COPY target/*.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar"]