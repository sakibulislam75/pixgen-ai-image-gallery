export const topGenerationData = async () => {
   try {
      const res = await fetch('https://pixgen-ai-image-gallery-alpha.vercel.app/data.json');
      if (!res.ok) {
         throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      return data;
   } catch (err) {
      console.error('topGenerationData error:', err);
      throw new Error(`Failed to fetch data`);
   }
};
