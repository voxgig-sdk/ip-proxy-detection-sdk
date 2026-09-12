import { IpProxyDetectionEntityBase } from '../IpProxyDetectionEntityBase';
import type { IpProxyDetectionSDK } from '../IpProxyDetectionSDK';
import type { Control } from '../types';
import type { Check, CheckLoadMatch } from '../IpProxyDetectionTypes';
declare class CheckEntity extends IpProxyDetectionEntityBase<Check> {
    constructor(client: IpProxyDetectionSDK, entopts: any);
    make(this: CheckEntity): CheckEntity;
    load(this: any, reqmatch?: CheckLoadMatch, ctrl?: Control): Promise<CheckEntity>;
}
export { CheckEntity };
