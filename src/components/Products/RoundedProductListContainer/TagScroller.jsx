import PropTypes from "prop-types";

function TagScroller({ tagList = ["da"] }) {
     console.log(tagList);
     return (
          <ul
               id="tags"
               className="flex items-center overflow-x-auto scroll-hidden w-full h-8 gap-8">
               {tagList.map((tag, index) => (
                    <li key={index}>
                         <button className="w-24 h-6 text-center text-sm font-bold rounded-full text-proj-lightGray bg-proj-purple dark:text-proj-darkGray dark:bg-proj-orange">
                              {tag}
                         </button>
                    </li>
               ))}
          </ul>
     );
}

TagScroller.propTypes = {
     tagList: PropTypes.array,
};

export default TagScroller;
