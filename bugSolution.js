```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Check if the route is already active before pushing
    if (router.pathname !== '/my-page') {
      router.push('/my-page');
    }
  };

  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}

export default MyComponent; 
```