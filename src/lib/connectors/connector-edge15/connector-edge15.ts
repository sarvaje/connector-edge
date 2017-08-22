/**
 * @fileoverview Connector for Edge 15 that uses [edge-diagnostics-adapter](https://github.com/Microsoft/Edge-diagnostics-adapter)
 * to load a site and do the traversing.
*/

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import { AsyncHTMLDocument, AsyncHTMLElement } from '@sonarwhal/sonar/dist/src/lib/connectors/shared/async-html'; // eslint-disable-line no-unused-vars
import { Connector } from '@sonarwhal/sonar/dist/src/lib/connectors/shared/remote-debugging-connector';
import { IConnector, IConnectorBuilder, ILauncher } from '@sonarwhal/sonar/dist/src/lib/types'; // eslint-disable-line no-unused-vars
import { EdgeLauncher } from './connector-edge15-launcher';

import { Sonar } from '@sonarwhal/sonar/dist/src/lib/sonar'; // eslint-disable-line no-unused-vars

class EdgeConnector extends Connector {
    constructor(server: Sonar, config: object, launcher: ILauncher) {
        super(server, config, launcher);
    }
}

const builder: IConnectorBuilder = (server: Sonar, config): IConnector => {
    const launcher = new EdgeLauncher({});
    const collector = new EdgeConnector(server, config, launcher);

    return collector;
};

export default builder;
