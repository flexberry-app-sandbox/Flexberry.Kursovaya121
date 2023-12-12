docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya12-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya12-java/app ../../..
