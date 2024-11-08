function AdminFooter(props) {
    return (
      <footer className="flex items-center justify-end p-5 bg-white flex-shrink-0 mt-auto">
        <span className="text-gray-700 text-opacity-50 font-medium">
          Copyright © Website {new Date().getFullYear()}
        </span>
      </footer>
    );
  }
  
  export default AdminFooter;