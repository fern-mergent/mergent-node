/**
 * This file auto-generated by Fern from our API Definition.
 */

import { MergentApi } from "../../..";
import * as core from "../../../core";

export const TaskStatus: core.schemas.Schema<TaskStatus.Raw, MergentApi.TaskStatus> = core.schemas
  .string()
  .transform<MergentApi.TaskStatus>({
    parse: (value) => MergentApi.TaskStatus._parse(value),
    json: ({ value }) => value,
  });

export declare namespace TaskStatus {
  type Raw = string;
}
