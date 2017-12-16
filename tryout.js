//This code implemetns sheet 7 Q 7
//THIS CODE SOLVES N:Processes x M:Resources
var available = [3,3,2,1]; //Initial available Value

function processType(newType,num)
    {
        var i = 0;
      var allocArr = [0];
      for (;i < newType.length; i++)
        {
          allocArr[i] = newType[i][0];
        }

         var maxArr = [0];
      for (i = 0;i < newType.length; i++)
        {
           maxArr[i] = newType[i][1];
        }

        var needArr = [0];
          for(i = 0; i < newType.length; i++){
               needArr[i] = maxArr[i] - allocArr[i];

          }
        if(num == 1){
            return allocArr;
        }
        else if(num == 2){
            return maxArr;
        }
        else if(num == 3)
        {
            return needArr;
        }
        else if(num == 4)
        {
            return newType.length;
        }
    }


function proc(type) // Functions takes 3 arguments each represents a different type [[AVAILABLE, MAX],[],[],[],.....]
    {
        this.procSafeSeqNum = 0,
        this.seqSet = false,
        this.typea = processType(type,1),
        this.typem = processType(type,2),
        this.need = processType(type,3),
        this.myLength = processType(type,4),
        this.myType = type
    };


var procArr = [0];//setting the ALLOCATION and MAXIMA for each type in each process proc([[AVAILABLE, MAX],[AVAILABLE, MAX],[AVAILABLE, MAX]])
procArr[0] = new proc([[2,4],[0,2],[0,1],[1,2]]);
procArr[1] = new proc([[3,5],[1,2],[2,5],[1,2]]);
procArr[2] = new proc([[2,2],[1,3],[0,1],[3,6]]);
procArr[3] = new proc([[1,1],[3,4],[1,2],[2,4]]);
procArr[4] = new proc([[1,3],[4,6],[3,6],[2,5]]);

function setSeq(arr)
    {

      var arrayLength = arr.length;
      var seq = 0 ;
        for(var i = 0;seq < arrayLength; i++)
        {

          if(i == arr.length)//If we reached last PROCESS but SEQUENCE is not yet set completely
          {
            i = 0;
          }
            var testWith = arr[i].need;//array containing instantaneous NEED
            var evaluation = false;
            for (var z = 0; z < arr[i].need.length; z++)
            {
                if(testWith[z] <= available[z])
                {
                    print("evaluation false");
                    print(testWith[z]+"=t a="+ available[z]);
                }
                else
                {
                    print("evaluation true");
                     print(testWith[z]+"=t a="+ available[z]);
                    evaluation = true;
                }
            }

          if(evaluation == false && arr[i].setSeq != true)//ckecking AVAILABILITY with NEED
          {
            print ("available:" + available);
            print ("need:" + testWith);
            arr[i].setSeq = true;//decalring the SEQUENCE is set
            arr[i].procSafeSeqNum = seq;//assigning SEQUENCE
            seq++;//incrementing SEQUENCE
            for(var n = 0; n < arr[i].typea.length; n++)
            {
              available[n] += arr[i].typea[n];
            }
              print ("Process: " + i + " set to sequence of Number: " + arr[i].procSafeSeqNum);
              print ("");
          }
        }
        return arr;
      }


function safeSeq()
    {
      var arrayOfSequence = [0];
      setSeq(procArr);
      for(var i = 0; i < procArr.length; i++)
      {
          //print("Sequence of process: " + i + " is " + procArr[i].procSafeSeqNum);
          arrayOfSequence[procArr[i].procSafeSeqNum] = i;
      }
      print("");
      print("Safe sequence: " + arrayOfSequence);
    }

safeSeq();
