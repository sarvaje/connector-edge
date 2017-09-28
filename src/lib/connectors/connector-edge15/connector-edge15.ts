/**
 * @fileoverview Connector for Edge 15 that uses [edge-diagnostics-adapter](https://github.com/Microsoft/Edge-diagnostics-adapter)
 * to load a site and do the traversing.
*/

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import { Connector } from '@sonarwhal/sonar/dist/src/lib/connectors/debugging-protocol-common/debugging-protocol-connector';
import { IConnector, IConnectorBuilder, ILauncher } from '@sonarwhal/sonar/dist/src/lib/types';
import { EdgeLauncher } from './connector-edge15-launcher';

import { Sonar } from '@sonarwhal/sonar/dist/src/lib/sonar';

class EdgeConnector extends Connector {
    public constructor(server: Sonar, config: object, launcher: ILauncher) {
        super(server, config, launcher);
    }
}

const builder: IConnectorBuilder = (server: Sonar, config): IConnector => {
    const launcher = new EdgeLauncher({});
    const collector = new EdgeConnector(server, config, launcher);

    return collector;
};

export default builder;
