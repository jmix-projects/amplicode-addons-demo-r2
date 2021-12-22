FROM openjdk:11
RUN apt-get update && apt-get -y install libreoffice
WORKDIR /app
COPY build/libs/amplicode-addons-demo-r2-0.0.1-SNAPSHOT.jar amplicode-addons-demo-r2.jar
EXPOSE 8080/tcp
EXPOSE 8080/udp
ENTRYPOINT ["java","-jar","amplicode-addons-demo-r2.jar"]