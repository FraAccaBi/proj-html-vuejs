<template>
  <div class="my-container">
    <section class="courses col-2-container">
      <div class="row pt-5">
        <div class="col-7 pe-4">
          <h2>
            Thousands of courses for any type of student
            </h2>
          <p>
            At EduPrime, it doesn't matter what domain you wish to sursue a caree in. Here you can find a course tha satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.
          </p>
          <button class="btn-yellow text-light ms-5 ">
            Browse through courses
          </button>
        </div>
        <div class="col-5">
          <img src="../../public/img/Graduation-Illustration.png" alt="">
        </div>
      </div>
    </section>
    <section class="faculties">
      <div class="text-center">
        <h2>
        Faculties available at EduPrime
      </h2>
      <p class="fs-6">
        A single university with a load of courses, tailored <br>
        to satisfy any student's needs.
      </p>
      </div>
      <div class="slider container">
        <div class="row row-cols-5">
          <div class="col box d-flex flex-column align-items-center box-active">
            <img src="../../public/img/Gavel-v2.png" alt="">
            <div class="title">
              Law faculty
            </div>

          </div>
          <div class="col box d-flex flex-column align-items-center ">
            <img src="../../public/img/Coins-tabs-v2.png" alt="">
            <div class="title">
              Economy
            </div>
          </div>
          <div class="col box d-flex flex-column align-items-center">
            <img src="../../public/img/Medicine-tabs-v2.png" alt="">
            <div class="title">
              Medicine
            </div>
          </div>
          <div class="col box d-flex flex-column align-items-center">
            <img src="../../public/img/Computer-tabs-v2.png" alt="">
            <div class="title">
              Computer Science
            </div>
          </div>
          <div class="col box d-flex flex-column align-items-center">
            <img src="../../public/img/Palette-tabs-v2.png" alt="">
            <div class="title">
              Graphic Design
            </div>    
          </div>
        </div>
      </div>
      <div class="law-example col-2-container">
        <div class="row py-5">
          <div class="col-5">
            <img src="../../public/img/Gavel-Illustration-e1556884768193.png" alt="">
          </div>
          <div class="col-7">
            <h3>
              Law Faculty
            </h3>
            <p>
              Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.
            </p>
            <button class="btn-pink text-light">
              Read More
            </button>
          </div>
        </div>
        
      </div>
      <div class="wave"></div>
    </section>
    <section class="uni-years py-5 text-center">
        <h2 >
          University Year
        </h2>
        <div class="container">
          <div class="row justify-content-end">
          <div class="col-4">
            <h5>Demo classes</h5>
            <p>
              In the fisrt week, students try to accomodate with the teaching style and choose their optional courses.
            </p>
          </div>
          <div class="col-4">
            <h5>Graduation Day</h5>
            <p>
              On the day of graduation, all students gather for the ceremony and then network and party among others.
            </p>
          </div>
        </div>
        <img src="../../public/img/Timeline-Item.png" alt="">
        <div class="row justify-content-start">
          <div class="col-4">
            <h5>Orientation</h5>
            <p>
              First day of the university year, all students gather for the opening ceremony an then network with others.
            </p>
         </div>
          <div class="col-4">
            <h5>Evaluation</h5>
            <p>
              At the end of a semester, students take a general evaluation test for every subject they're learning.
            </p>
          </div>
        </div>
        </div>
        
    </section>
    <section class="upcoming">
      <h2>
        Upcoming Events
      </h2>
      <div class="box">Coaching Sessions</div>  
      <div class="box">Coaching Sessions</div>
      <div class="box">Coaching Sessions</div>
      <button class="btn-yellow">
        View All Events
      </button>
    </section>
    <section class="latest">
      <h2>
        Latest Courses
      </h2>
      <div class="courses">
        <div class="course-box">
        <h5>
          Make Better Decisions
        </h5>

        </div>
        <div class="course-box">
          <h5>
            How to be a speaker
          </h5>
        </div>
        <div class="course-box">
          <h5>
            Network Introductions
          </h5>
        </div>
        <div class="course-box">
          <h5>
            Brand Management
          </h5>
        </div>
      </div>
      <h3>
        The most efficient examination method
      </h3>
      <p>
        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
      </p>
      <button class="btn-pink">
        Discover the Method
      </button>
    </section>
    <section class="fees">
      <h2>
        Variable fees for international students
      </h2>
      <p>
        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
      </p>
      <button class="btn-pink">
        List of Fees
      </button>
    </section>
    <section class="subscription">
      <h3>
        Subscribe now to Our Newsletter !
      </h3>
      <input type="text" placeholder="Email address...">
    </section>
    <section class="partners">
      <h3>
        Partners
      </h3>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SiteMain',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.courses{
  height: 425px;
}
.faculties{
  height: 555px;
  margin-bottom:148px;
  .box{
    padding-top: 10px;
    height: 130px;
    color: $text-pink;
    border: 2px solid $border-grey-1;
  }
  .box>img{
    width: 100px;
  }
  .box-active:hover{
    background-color: $bg-pink-transparent;
    border:none;
    
    color: $text-light;
    img{
      filter: brightness(3.5);
    }

  }
}
.col-5>img{
    max-width: 300px;
  }
.wave{
    background-image: url("../../public/img/Wave-1.png"), url("../../public/svg/svg-0.svg") ;
    background-repeat: no-repeat;
    height: 130px;
    width: 1440px;
    background-blend-mode: multiply;
    background-size: cover;
  }
.uni-years{
  background-color: $bg-pink;
  height: 650px;
  color: $text-light;
  h2{
    color: $text-light;
    padding: 2rem;
  };
  .justify-content-end{
    padding-right: 8rem;
    column-gap: 4rem;
  };
  .justify-content-start{
    padding-top: 1rem;
    padding-left: 8rem;
    column-gap: 4rem;
  }
}
</style>
