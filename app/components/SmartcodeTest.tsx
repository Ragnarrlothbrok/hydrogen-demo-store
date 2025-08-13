// app/components/SmartcodeTest.tsx
import {useEffect} from 'react';

export default function SmartcodeTest() {
  let hydrated = false;
  const r = `<script>console.log('FAIL: dangerouslySetInnerHTML — should NOT run');</script>`;

  useEffect(() => {
    // Alternatively add SmartCode from useEffect [Not recommended due to possible flicker issues]
    // const script = document.createElement('script');
    // script.id = 'demo-ok-script';
    // script.text = r; //SmartCode as text
    // document.body.appendChild(script);
  }, []);

  //Failing implementation.
  // return hydrated ? (
  //   <>
  //     <link href="https://dev.visualwebsiteoptimizer.com" rel="preconnect" />
  //     <div id="vwo-code" dangerouslySetInnerHTML={{__html: r}} />
  //   </>
  // ) : null;

  //Solution: Directly add the SmartCode without any dependency.
  return <>
    <link href="https://dev.visualwebsiteoptimizer.com" rel="preconnect" />
    <div id="vwo-code" dangerouslySetInnerHTML={{__html: r}} />
  </>;
}
