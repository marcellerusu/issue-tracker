import React, {useState} from 'react';

import Card from '../misc/Card';
import Button from '../misc/Button';
import Overlay from '../misc/Overlay';

const Story = React.forwardRef(({children, onDelete, ...props}, ref) => {
  const [showModal, setModal] = useState(false);
  return (
    <>
      {showModal &&
        <Overlay show={showModal} onClickOut={() => setModal(false)}>
          <Card title='Delete?' className="shadow" onClose={() => setModal(false)}>
            <p className="text-center">
              Are you sure want to delete?
            </p>
            <span className="flex justify-end footer">
              <Button onClick={() => setModal(false)}>No</Button>
              <Button type='danger' onClick={onDelete}>
                Yes
              </Button>
            </span>
          </Card>  
        </Overlay>  
      }
      <Card
        {...props}
        ref={ref}
        onClose={() => setModal(true)}
      >
        {children}
      </Card>
    </>
  );
});

export default Story;