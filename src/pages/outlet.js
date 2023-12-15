export default (req, res) => {
    if (req.method === 'POST') {
      const { address } = req.body;
      const outletIdentifier = findOutletIdentifier(address);
  
      res.status(200).json({ outletIdentifier });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  
  function findOutletIdentifier(address) {

    return 'ABC123';
  }
  