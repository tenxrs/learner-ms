import { useEffect } from 'react';
const Activities = () => {
  const data =
    'When \\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]';

  useEffect(() => {
    if (typeof window?.MathJax !== 'undefined') {
      window.MathJax.typeset();
    }
  }, []);

  return <div className="font-mono">{data}</div>;
};

export default Activities;
