/**
 * This file auto-generated by Fern from our API Definition.
 */

import { CompanyApi } from "../../..";
import * as core from "../../../core";

export const TaskStatus: core.schemas.Schema<TaskStatus.Raw, CompanyApi.TaskStatus> = core.schemas
  .string()
  .transform<CompanyApi.TaskStatus>({
    parse: (value) => CompanyApi.TaskStatus._parse(value),
    json: ({ value }) => value,
  });

export declare namespace TaskStatus {
  type Raw = string;
}