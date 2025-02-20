```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an infinite redirect loop if the route is already active
    router.push('/my-page'); 
  };

  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}

export default MyComponent; 
```