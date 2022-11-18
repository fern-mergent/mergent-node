/**
 * This file auto-generated by Fern from our API Definition.
 */

import { MergentApi } from "../../..";

export interface TaskStatus<RawValue extends TaskStatus.RawValue = TaskStatus.RawValue> {
  value: RawValue;
  visit: <_Result>(visitor: MergentApi.TaskStatus._Visitor<_Result>) => _Result;
}

const _Queued: TaskStatus<"queued"> = {
  value: "queued",
  visit: (visitor) => visitor.queued(),
};
const _Working: TaskStatus<"working"> = {
  value: "working",
  visit: (visitor) => visitor.working(),
};
const _Success: TaskStatus<"success"> = {
  value: "success",
  visit: (visitor) => visitor.success(),
};
const _Failure: TaskStatus<"failure"> = {
  value: "failure",
  visit: (visitor) => visitor.failure(),
};
export const TaskStatus = {
  Queued: _Queued,
  Working: _Working,
  Success: _Success,
  Failure: _Failure,
  _parse: (value: string): TaskStatus => {
    switch (value) {
      case "queued": {
        return _Queued;
      }
      case "working": {
        return _Working;
      }
      case "success": {
        return _Success;
      }
      case "failure": {
        return _Failure;
      }
      default: {
        return {
          value: value as TaskStatus.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace TaskStatus {
  type RawValue = "queued" | "working" | "success" | "failure";

  interface _Visitor<_Result> {
    queued: () => _Result;
    working: () => _Result;
    success: () => _Result;
    failure: () => _Result;
    _other: (value: string) => _Result;
  }
}
