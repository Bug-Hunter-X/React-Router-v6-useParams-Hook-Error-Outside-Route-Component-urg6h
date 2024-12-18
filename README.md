# React Router v6 useParams Hook Error Outside Route Component

This repository demonstrates a common error encountered when using the `useParams()` hook in React Router v6.  The error occurs when attempting to access route parameters outside of a component that's rendered by a route.

The `useParamsError.js` file shows the erroneous implementation, while `useParamsSolution.js` provides the corrected version.

## Problem
The `useParams()` hook requires access to the routing context, which is only available within components rendered within a route.  Using it elsewhere will result in an error, typically a `TypeError` indicating that `useParams` is not a function.

## Solution
Pass the necessary parameters from the route component to the component where they are needed.  This ensures that the parameters are accessible without relying on the routing context directly.