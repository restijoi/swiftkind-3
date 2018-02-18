import * as _ from "lodash";
import { publicStates } from './public.states';


export const appStates = _.flattenDeep([
  publicStates
])