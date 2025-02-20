# Next.js Infinite Redirect Loop

This repository demonstrates a common issue in Next.js applications: an infinite redirect loop caused by improper use of the `useRouter` hook. The `bug.js` file contains code that triggers this loop, while `bugSolution.js` provides a corrected version.

## Problem

The problem arises when attempting to navigate to a route that is already active using `router.push()`. This creates a continuous redirect cycle, leading to unexpected behavior and potentially crashing the application.

## Solution

The solution involves adding a check to ensure the route is different before initiating the redirect.  This prevents unnecessary and problematic navigation.