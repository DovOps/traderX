# Architecture

## FINOS CALM architecture diagram

FINOS CALM (Common Architecture Language Model) architecture diagram showing services, databases, external integrations, and messaging connections. Use this to understand the high-level system architecture and component relationships.

## Data Tables

### Service endpoints

**File:** [`service-endpoints.csv`](service-endpoints.csv)

REST/HTTP endpoints exposed by the application.

| Column | Description |
|--------|-------------|
| Entity ID | Unique identifier for this endpoint entity (format: endpoint:{className}#{methodSignature}). |
| Source path | The path to the source file containing the endpoint. |
| Service class | The fully qualified name of the controller or resource class. |
| Method name | The name of the endpoint method. |
| HTTP method | The HTTP method (GET, POST, PUT, DELETE, PATCH, etc.). |
| Path | The URL path pattern for the endpoint. |
| Produces | Content types the endpoint produces (e.g., application/json). |
| Consumes | Content types the endpoint consumes (e.g., application/json). |
| Framework | The web framework used (Spring, JAX-RS, Micronaut, Quarkus). |
| Method signature | The full method signature for linking to method descriptions. |

### External service calls

**File:** [`external-service-calls.csv`](external-service-calls.csv)

Outbound HTTP/REST calls to external services.

| Column | Description |
|--------|-------------|
| Entity ID | Unique identifier for this external service entity (format: external:{className}). |
| Source path | The path to the source file containing the external service call. |
| Client class | The fully qualified name of the class making the external call. |
| Target service | The name or URL of the target external service. |
| Client type | The type of HTTP client used (RestTemplate, WebClient, Feign, etc.). |
| Protocol | The protocol used (HTTP, HTTPS). |
| Base URL | The base URL for the external service if configured. |

### Security configuration

**File:** [`security-configuration.csv`](security-configuration.csv)

Security configuration including authentication methods, CORS settings, and OAuth2 configuration.

| Column | Description |
|--------|-------------|
| Source path | The path to the source file containing the security configuration. |
| Configuration type | The type of security configuration (WebSecurity, OAuth2, CORS, etc.). |
| Auth method | Authentication method if detected (Basic, OAuth2, JWT, etc.). |
| Allowed origins | CORS allowed origins if configured. |
| Description | Description of the security configuration. |

### Server configuration

**File:** [`server-configuration.csv`](server-configuration.csv)

Server configuration properties extracted from application.properties/yml.

| Column | Description |
|--------|-------------|
| Source path | The path to the configuration file. |
| Server port | The server port (default: 8080). |
| SSL enabled | Whether SSL/TLS is enabled. |
| Context path | The servlet context path. |
| Protocol | The protocol (HTTP or HTTPS) based on SSL configuration. |

### Database connections

**File:** [`database-connections.csv`](database-connections.csv)

Database connections and data access patterns in the application.

| Column | Description |
|--------|-------------|
| Entity ID | Unique identifier for this database entity (format: repository:{className} or entity:{className}). |
| Source path | The path to the source file containing the database access. |
| Entity/Table name | The name of the entity or table being accessed. |
| Entity class | The fully qualified name of the entity class (if applicable). |
| Repository class | The fully qualified name of the repository or DAO class (if applicable). |
| Connection type | The type of database connection (JPA, JDBC, Spring Data, MyBatis). |
| Database type | The type of database if detectable (PostgreSQL, MySQL, MongoDB, etc.). |

### Data assets

**File:** [`data-assets.csv`](data-assets.csv)

Data entities, DTOs, and records that represent the application's data model.

| Column | Description |
|--------|-------------|
| Source path | The path to the source file containing the data asset. |
| Class name | The fully qualified name of the data asset class. |
| Simple name | The simple class name for display. |
| Asset type | The type of data asset (Entity, Record, DTO, Document, etc.). |
| Description | A description of the data asset based on its fields. |
| Fields | Comma-separated list of field names. |

### Deployment artifacts

**File:** [`deployment-artifacts.csv`](deployment-artifacts.csv)

Deployment configuration files (Dockerfile, Kubernetes manifests, docker-compose).

| Column | Description |
|--------|-------------|
| Source path | The path to the deployment artifact file. |
| Artifact type | The type of deployment artifact (Dockerfile, Kubernetes, docker-compose). |
| Container image | The base container image if detected. |
| Exposed port | Port exposed by the container. |
| Description | Description of the deployment artifact. |

