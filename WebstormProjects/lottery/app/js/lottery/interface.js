/**
 * Created by wangjialei on 2017/5/16.
 */
import $ from 'jquery';

class Interface{
    getOmit(issue) {
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res){
                    self.setOmit(res.data);
                }
            });
        });
    }
}