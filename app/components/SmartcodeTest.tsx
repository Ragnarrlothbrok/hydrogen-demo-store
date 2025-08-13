// app/components/SmartcodeTest.tsx
import {useEffect} from 'react';

export default function SmartcodeTest() {
  let hydrated = false;
  const r = `<script>console.log('FAIL: dangerouslySetInnerHTML — should NOT run');</script>`;

  useEffect(() => {
    // ✅ Working: create a real <script> node and append it
    const ok = document.createElement('script');
    ok.id = 'demo-ok-script';
    ok.text = `console.log('OK: createElement + appendChild executed');`;
    document.body.appendChild(ok);
    hydrated = true;

    //Solution 1: Alternatively add SmartCode from useEffect
    // const script = document.createElement('script');
    // script.id = 'demo-ok-script';
    // script.text = r; //SmartCode as text
    // document.body.appendChild(script);
  }, []);

  //Failing implementation.
  return hydrated ? (
    <>
      <link href="https://dev.visualwebsiteoptimizer.com" rel="preconnect" />
      <div id="vwo-code" dangerouslySetInnerHTML={{__html: r}} />
    </>
  ) : null;

  //Solution 2: Directly add the SmartCode without any dependency.
  // return <>
  //   <link href="https://dev.visualwebsiteoptimizer.com" rel="preconnect" />
  //   <div id="vwo-code" dangerouslySetInnerHTML={{__html: r}} />
  // </>;
}
