/**
 * This file auto-generated by Fern from our API Definition.
 */

import { MergentApi } from "../../..";
import * as core from "../../../core";

export type Response = core.APIResponse<MergentApi.Schedule, MergentApi.schedule.create.Error>;
export type Error = MergentApi.schedule.create.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: MergentApi.schedule.create.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}
