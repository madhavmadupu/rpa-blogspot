import React from 'react';
import './BlogPage.css';  // Import your custom styles if needed
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPage = ({ heroImage, title, author, date, readTime, tag, content }) => {
  return (
    <div className='container-fluid pageContainer m-0 p-0 '>

      {/* Hero Section */}
      <div className='row align-items-center'>
        <div className='col-12 text-center'>
          <div className='heroSection'>
            <div className='hero-image-container position-relative'>
              <img
                src='https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='HeroImage'
                className='img-fluid w-100 h-100 object-cover'
              />
              <div className="position-absolute top-0 start-0 end-0 bottom-0"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              </div>
              {/* Text Overlay */}
              <div className="position-absolute top-50 start-50 translate-middle text-white">
                <h1 className="display-4 heroSection-title">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='m-0 contentHolder container-fluid'>
        {/* Blog Details */}
        <div className='row my-5'>
          <div className='col-12'>
            <div className='blogDetails'>
              {/* <img src="https://www.visvero.com/wp-content/uploads/2021/10/Left.png" width={70} className="author_avatar" alt="avatar" /> */}
              <span className="blogDetails-details fs-4 align-items-center">{author}</span>
              <span className="blogDetails-details fs-4 align-items-center">{date}</span>
              <span className="blogDetails-details fs-4 align-items-center">{readTime}</span>
              <span className="blogDetails-details fs-4 align-items-center">{tag}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='row my-3'>
          <div className='col-12 mx-auto'>
            <div className='contentSection'>
              <p className="container_para">
                RPA stands for <span className="color_para_org">Robotic Process Automation</span> ,though
                may sound like a lot of complex words joined together, it simply means
                automating the repetitive tasks we may find in our daily routine.
                <br /><br />
                <img
                  src='https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='contentSection-img'
                  className='contentSection-img'
                />
                Imagine you have to copy information from one spread sheet to a word
                document every day or send emails to a bunch of people;
                <span className="color_para_blue">RPA can do that for you.</span> Its
                almost like an actual robot doing the work for you (but instead of a
                physical robot, it is a software robot), hence the name
                <span className="color_para_org">Robotic Process Automation</span>
                <br></br>Robotic Process Automation (RPA) has emerged as a transformative technology in the business world, streamlining processes and enhancing efficiency, with UiPath standing at the forefront of this automation revolution. UiPath is a leading RPA platform that empowers organizations to automate repetitive, rule-based tasks, liberating human resources for more strategic and creative endeavors. Through its intuitive user interface, UiPath enables users to design, deploy, and manage automation workflows seamlessly. The platform employs a visual, drag-and-drop approach, making it accessible even to those without extensive coding backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
