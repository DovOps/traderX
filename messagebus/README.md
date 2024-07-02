# Message Bus for TraderX

The messagebus for TraderX is based on apache pulsar, which is able to be run in standalone+websocket mode for a simple local developer environment and ephemeral testing environment, while at the same time robust enough for pub/sub and price stream messaging for the TraderX end-to-end system.

NOTE: Because this is downloaded locally, there's initial setup required when first running this, while all the binary/artifacts/data is intentionally `.gitignore`d.

# Initial Setup

Following the documentation for Pulsar 3.1.x standalone [which can be found here](https://pulsar.apache.org/docs/3.1.x/getting-started-standalone/):

## Step 1: Installing the binaries into the 'pulsar' directory

```sh
wget https://archive.apache.org/dist/pulsar/pulsar-3.1.0/apache-pulsar-3.1.0-bin.tar.gz
tar xvfz apache-pulsar-3.1.0-bin.tar.gz
cd apache-pulsar-3.1.0

```

## Step 2: Verifying the installation worked by running

```sh
# in the pulsar/apache-pulsar-3.1.0 directory
bin/pulsar standalone
```