## Testimonials

to make an expandable section for each item in the data file:

... with <b>.map</b>
```javascript
{data.map((item) => (
          <ExpandableSection
            key={item.id}
            author={item.author}
            body={item.testimony}
          />
        ))}
```

... with a <b>for loop</b>:
```javascript
  let testies = []
    for (let i = 0; i < data.length; i++) {
    testies.push(<ExpandableSection key={i} />);
    }
```


const tutoringSubjects = data.map((subject) => {
  return <SubjectItem key={subject.id} subject={subject.subject} course={subject.courses} />
});

// subject item list component:
function SubjectItem(props) {
  return <li>{props.courses}</li>
};

https://www.carlrippon.com/playing-with-styled-components/


const TutoringSubjects = data.map((subject) => {
  return <p key={subject.id} subject={subject.subject} course={subject.courses}>{subject.subject}</p>
});

console.log()

const Subjects = () => {
  return (
    <Container>
      <h1>subjects</h1>
      <div>
        <TutoringSubjects />
            {/* <ul>
              <SubjectItem></SubjectItem>
            </ul> */}
        
     
      </div>
    </Container>
  );
};

class App extends

https://blog.logrocket.com/the-beginners-guide-to-mastering-react-props-3f6f01fd7099/