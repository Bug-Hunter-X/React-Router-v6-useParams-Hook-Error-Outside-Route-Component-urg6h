To fix this, pass the necessary parameters from the route component to the component where you need them.  Avoid directly using `useParams()` outside of a route component.

```javascript
// useParamsSolution.js
import { useParams } from 'react-router-dom';

function MyRouteComponent() {
  const { id } = useParams();
  return (
    <div>
      <h2>Route Component</h2>
      <MyOtherComponent id={id} />
    </div>
  );
}

function MyOtherComponent({ id }) {
  return (
    <div>
      <h2>Other Component</h2>
      <p>ID: {id}</p>
    </div>
  );
}

export default MyRouteComponent;
```