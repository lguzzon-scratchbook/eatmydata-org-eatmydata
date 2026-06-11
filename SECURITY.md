# Security Policy

## Do-not-call external services

This application has a strict policy of being local-first and do not rely on external services UNLESS explicitely whitelisted and configured by the user (such as remote LLM API). 
No library, data, or fonts loading from external sources allowed.

## Data obfuscation and AI exploration through query exposure

While we put reasonable effort to hide data from remote LLM, we can expose the fact the record *exists* for a particular `WHERE` filter, by design.

## Reporting a Vulnerability

To report a vulnerability please reach out to support@eatmydata.ai.
