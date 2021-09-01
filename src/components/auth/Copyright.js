const Copyright = () => {
    const today = new Date();
    return (
        <div className="text-center">
        <div className="copyright_text">&copy; {today.getFullYear()} SellerGeni (P) Ltd, All Rights Reserved.</div>
    </div>
      );
}
 
export default Copyright;