docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya12/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kursovaya12/app ../..
