/**
 * @fileoverview Connector for Edge 15 that uses [edge-diagnostics-adapter](https://github.com/Microsoft/Edge-diagnostics-adapter)
 * to load a site and do the traversing.
*/

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import { Connector } from 'sonarwhal/dist/src/lib/connectors/debugging-protocol-common/debugging-protocol-connector';
import { IConnector, IConnectorBuilder, ILauncher } from 'sonarwhal/dist/src/lib/types';
import { EdgeLauncher } from './connector-edge-launcher';

import { Sonarwhal } from 'sonarwhal/dist/src/lib/sonarwhal';

class EdgeConnector extends Connector {
    public constructor(server: Sonarwhal, config: object, launcher: ILauncher) {
        super(server, config, launcher);
    }
}

const builder: IConnectorBuilder = (server: Sonarwhal, config): IConnector => {
    const launcher = new EdgeLauncher(config);
    const collector = new EdgeConnector(server, config, launcher);

    return collector;
};

export default builder;
