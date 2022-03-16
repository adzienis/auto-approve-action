import * as core from "@actions/core";
import * as github from "@actions/github";
import { approve } from "./approve";

async function run() {
  const token = core.getInput("github-token", { required: true });
  const body = core.getInput("body");
  const prNumber: number = parseInt(core.getInput("pull-request-number"), 10);
  
  await approve(token, github.context, prNumber, body);
}

run();
