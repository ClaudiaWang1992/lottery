/**
 * Created by wangjialei on 2017/5/16.
 */
class Calculate{
    // active 当前选中号码个数
    // play_name 当前玩法标识
    //计算买家投了多少注
    computeCount(active,play_name){
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr = new Array(active).fill('0');
        if(exist && play_name.at(0) === 'r'){
            count = Calculate.combine(arr,play_name.split('')[1]).length;
        }
        return count;
    }

    computeBonus(active,play_name){
        const play = play_name.split('');
    }
    // arr：用户选中所有数字组成数组
    // size:当前玩法中任选几个以上
    static combine(arr,size){
        let allResult = [];
        (function f(arr,size,result){
            let arrLen = arr.length;
            //用户至少要选中size个才能投注
            if(size>arrLen){
                return;
            }
            if(size===arrLen){
                allResult.push([].concat(result,arr));
            }else{
                for(let i=0;i<arrLen;i++){
                    let newResult =[].concat(result);
                    newResult.push(arr[i]);
                    if(size===1){
                        allResult.push(arr[i]);
                    }else{
                        let newArr = [].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult);
                    }
                }
            }
        })(arr,size,[])
        return allResult;
    }
}
export default Calculate;