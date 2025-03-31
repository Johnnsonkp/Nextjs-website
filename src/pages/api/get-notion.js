const { Client } = require('@notionhq/client');

// const notion = new Client({ auth: process.env.NOTION_API_KEY  });
// const notion = new Client({ auth: "secret_wYxskmFgXF0iaXPMVMSw5PMlQI3GK3lq4cnxbgPCKMv"  });

// console.log(process.env.NOTION_API_KEY );
// console.log(process.env.PAGE_ID );

// export default (async () => {
//   // const pageId = process.env.PAGE_ID
//   const pageId = "34a6187ed52749949253bfae09c45bbe"
//   const response = await notion.pages.retrieve({ page_id: pageId });

//   console.log(response);
//   return response;
// })();

const getNotion = async (req, res) => {
  // console.log(response);
  
  // const pageId = "34a6187ed52749949253bfae09c45bbe"
  // const response = await notion.pages.retrieve({ page_id: pageId });


  async function getPageData(pageId) {
    const response = await notion.search({
      query: 'Blog'
      // filter: {
      //   value: 'database',
      //   property: 'object'
      // },
    });
    // console.log(response);
    return response
    
  }

  const pageId = "34a6187e-d527-4994-9253-bfae-09c45bbe";
  // const pageData = await getPageData(pageId);
  const pageData = await getPageData();
  
  console.log(pageData);
  // console.log(notion)



  const response = await notion.search({
    query: 'Blog',
    filter: {
      value: 'database',
      property: 'object'
    },
  });
  console.log(response);


}

export default getNotion;

