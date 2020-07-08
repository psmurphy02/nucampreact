import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-5-md m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                {comment.text}
                <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  return <div></div>;
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.campsite.comments} />
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default CampsiteInfo;

// This is how it was before turning class components into functional components
// class CampsiteInfo extends Component {
//     renderCampsite(campsite) {
//       return (
//         <div className="col-md-5 m1">
//           <Card>
//             <CardImg top src={campsite.image} alt={campsite.name} />
//             <CardBody>
//               <CardTitle>{campsite.name}</CardTitle>
//               <CardText>{campsite.description}</CardText>
//             </CardBody>
//           </Card>
//         </div>
//       );
//     }

//     renderComments(comments) {
//       if (comments) {
//         return (
//           <div className="col-5-md m-1">
//             <h4>Comments</h4>
//             {comments.map((comment) => {
//               return (
//                 <div key={comment.id}>
//                   <p>
//                     {comment.text}
//                     <br />
//                     -- {comment.author},{" "}
//                     {new Intl.DateTimeFormat("en-US", {
//                       year: "numeric",
//                       month: "short",
//                       day: "2-digit",
//                     }).format(new Date(Date.parse(comment.date)))}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         );
//       }
//       return <div></div>;
//     }

//     render() {
//       if (this.props.campsite) {
//         return (
//           <div className="container">
//             <div className="row">
//               {this.renderCampsite(this.props.campsite)}
//               {this.renderComments(this.props.campsite.comments)}
//             </div>
//           </div>
//         );
//       }
//       return <div></div>;
//     }
//   }
//   export default CampsiteInfo;
