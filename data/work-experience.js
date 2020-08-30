const WorkExperienceData = [
    {
        "designation": "Senior Software Engineer",
        "organization": {
            "name": "Freshworks",
            "location": "Chennai",
            "website": "https://www.freshworks.com/"
        },
        "timePeriod": "2019 - PRESENT",
        "projects": [
            {
                "type": "Project",
                "name": "Rate-limiting Service",
                "responsibilities": [
                    "Working with the API-Gateway team at Freshworks on building a service which provides api-throttling and rate-limiting.",
                    "Developed features in the rate-limiting service while maintaining the core tenets of having low-latency and high throughput.",
                    "Wrote a spring-boot kafka consumer service for monitoring and creating alerts for surge protection.",
                    "Worked on tuning reverse proxy - Envoy, for improved performance of rate-limiting service and made an open-source feature contribution to Envoy (a CNCF graduated project)."
                ],
                "technologies": [
                    "Java", "AWS", "Redis", "Kafka", "Docker", "Envoy", "Distributed Systems"
                ],
                "link": null
            }
        ],
    }
]

export default WorkExperienceData;