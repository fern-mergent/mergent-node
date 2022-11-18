# Mergent Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/mergent)](https://www.npmjs.com/package/@fern-api/mergent)

## Documentation

API documentation is available at <https://api.mergent.co/docs/v2#/>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/node-s3pcsq?file=app.ts)

```typescript
import { MergentApiClient } from '@fern-api/mergent';

void main();

async function main() {
  const client = new MergentApiClient({
    auth: {
      token: 'YOUR_TOKEN',
    },
  });

  const response = await client.task.create({
    request: {
      url: 'https://www.google.com',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '{ "key": "value" }',
    },
    scheduledFor: new Date('2023-10-01T15:53:05Z'),
    delay: 'PT1M',
  });

  console.log(
    'Received response from Mergent!',
    JSON.stringify(response, undefined, 4)
  );
}

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-mergent/mergent-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
