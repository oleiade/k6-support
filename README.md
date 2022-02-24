# k6-support

A full-fledged local k6 ecosystem a `docker-compose up` away.

As a k6 maintainer, I often need to spin up a prometheus+influxDB+grafana stack locally to try things, and put myself in our users shoes. To make my life easier, I decided to aggregate the tech stack necessary and some common test scripts into this repository. Note that the docker-compose stack will automatically provision Grafana data sources and dashboards for you.

## Getting started

It's really that simple:

```
docker-compose up --build -d
```

From there, you will find:

- Prometheus at [localhost:9090](http://localhost:9090)
- InfluxDB at [localhost:8086](http://localhost:8086)
- Grafana at [localhost:9000](http://localhost:9000)
- k6 test scripts to run against in `testscripts`
