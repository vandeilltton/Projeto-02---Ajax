$(function () {
   let endpoint = 'https://api.github.com/users';
    const cardModel = $('.github-card');
    let model = cardModel.clone();
    $('form').submit(function (e) {
        e.preventDefault();
       const name = $('input:text[name=usuario-github]').val();
       const uri = endpoint + '/' + name;
         $.get(uri, function (response) {

            model.find('.avatar').attr('href', response.url);
            model.find('.avatar img').attr({'src': response.avatar_url, 'alt': response.avatar_url});

            let content = model.find('.content');
            content.find('h1').html(response.name);

            let itemList = content.find('li a');
            itemList.eq(0).find('strong').html(response.public_repos);
            itemList.eq(0).attr('href', response.repos_url);

            itemList.eq(1).find('strong').html(response.public_gists);
            itemList.eq(1).attr('href', response.gists_url);

            itemList.eq(2).find('strong').html(response.followers);
            itemList.eq(2).attr('href', response.followers_url);

            $('.container').html('');
            $('.container').append(model);
        }, 'json');
    });
});